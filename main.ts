let list = [
[
10,
50,
100,
150,
225
],
[
225,
150,
100,
50,
10
],
[
10,
50,
100,
150,
225
],
[
225,
150,
100,
50,
10
],
[
10,
50,
100,
150,
225
],
[
0,
0,
0,
0,
0
]
]
for (let Y = 0; Y <= 4; Y++) {
    for (let X = 0; X <= 4; X++) {
        led.plotBrightness(X, Y, list[Y][X])
    }
}
