import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { createTeris } from "./core/Teris";



const teris = createTeris({x: 3, y: 2})

teris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $('#root'))
})


$('#btn-down').click(() => {
    teris.centerPoint = {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y + 1
    }
})

$('#btn-up').click(() => {
    teris.centerPoint = {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y - 1
    }
})
$('#btn-left').click(() => {
    teris.centerPoint = {
        x: teris.centerPoint.x - 1,
        y: teris.centerPoint.y 
    }
})
$('#btn-right').click(() => {
    teris.centerPoint = {
        x: teris.centerPoint.x + 1,
        y: teris.centerPoint.y 
    }
})


// const sq = new Square();
// sq.viewer = new SquarePageViewer(sq, $('#root'));

// sq.color = "red";
// sq.point = {
//     x: 3,
//     y: 0
// }

// $('#btn-down').click(() => {
//     sq.point = {
//         x: sq.point.x,
//         y: sq.point.y + 1
//     }
// })


// $('#btn-remove').click(() => {
//     if(sq.viewer) {
//         sq.viewer.remove()
//     }
// })

// $('#btn-add').click(() => {
//     sq.viewer = new SquarePageViewer(sq, $("#root"));
//     sq.viewer.show()
// })