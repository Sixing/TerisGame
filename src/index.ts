import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from 'jquery'
import { createTeris } from "./core/Teris";
import { TerisRule } from "./core/TerisRule";
import { MoveDirection } from "./core/Types";



const teris = createTeris({x: 3, y: 2})

teris.squares.forEach(sq => {
    sq.viewer = new SquarePageViewer(sq, $('#root'))
})


$('#btn-down').click(() => {
    TerisRule.move(teris, MoveDirection.down)
})

$('#btn-up').click(() => {
    TerisRule.move(teris, {
        x: teris.centerPoint.x,
        y: teris.centerPoint.y - 1
    })
})
$('#btn-left').click(() => {
    TerisRule.move(teris, MoveDirection.left)
})
$('#btn-right').click(() => {
    TerisRule.move(teris, MoveDirection.right)
})

$('#rotateClock').click(() => {
    TerisRule.rotate(teris)
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