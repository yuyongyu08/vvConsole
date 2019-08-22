export default function getDistance(point1, point2){
    let point1_position = {
        x: point1.pageX,
        y: point1.pageY
    };

    let point2_position = {
        x: point2.pageX,
        y: point2.pageY
    };

    let xLen = Math.abs(point2_position.x - point1_position.x);
    let yLen = Math.abs(point2_position.y - point1_position.y);

    return Math.sqrt(xLen * xLen + yLen * yLen);
}