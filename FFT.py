import numpy
import matplotlib.pyplot as plt
from time import sleep
from scipy.io.wavfile import read

inputFile = "test.wav"

framerate, amplitude = read(inputFile)

frequency = list(abs(numpy.fft.fft(amplitude)))

#plt.plot(frequency)
#plt.show()

selectedFrequencies = frequency[2000:]

for i in selectedFrequencies:
    print(i[0], " ", i[1])
    sleep(0.2)
