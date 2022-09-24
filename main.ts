input.onButtonPressed(Button.A, function () {
    Q = Q + 1
    if (Q > 10) {
        Q = 0
    }
    basic.showNumber(Q)
})
input.onButtonPressed(Button.B, function () {
    if (Q == V) {
        basic.showString("Vous avez gagné")
    } else {
        if (Q < V) {
            basic.showString("Trop petit!")
        } else {
            basic.showString("Trop grand!")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    V = randint(0, 10)
    Q = 0
    basic.showNumber(Q)
    basic.showNumber(V)
})
let Q = 0
let V = 0
V = randint(0, 10)
Q = 0
let C = 0
basic.showNumber(Q)
basic.showNumber(V)
