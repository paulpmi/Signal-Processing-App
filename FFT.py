import numpy
from time import sleep
from scipy.io.wavfile import read
#import wavio


class WavComputer:
    def __init__(self, inputFile):

        self.inputFile = inputFile

        self.framerate, self.amplitude = read(self.inputFile)

        #wav = wavio.read(inputFile)

        self.frequency = list(abs(numpy.fft.fft(self.amplitude)))

        for i in self.frequency:
            print(int(i[0]) + int(i[1]))
            sleep(0.2)
        #selectedFrequencies = frequency

        #left_channel = wav.data[:, 0]
        #right_channel = wav.data[:, 1]

        #for i in range(len(left_channel)):
        #print("HELLO")
        #print([left_channel[i], right_channel[i]])

wavFile01 = WavComputer("test.wav")