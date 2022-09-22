import { FC, useEffect, useState } from "react";
import Point from "./point";
import {  SphereST } from "./style";

const Sphere: FC = () => {
    const [moveX, setMoveX] = useState([0, 0]);
    const [moveY, setMoveY] = useState([0, 0]);
    const [runAgain, setRunAgain] = useState(true)

    const getX = (): number => {
        return (moveX[1] - moveX[0]) > 5 ? 5 : (moveX[1] - moveX[0]) < -5 ? -5 : (moveX[1] - moveX[0])
    }

    const getY = () => {
        return (moveY[1] - moveY[0]) > 5 ? 5 : (moveY[1] - moveY[0]) < -5 ? -5 : (moveY[1] - moveY[0])
    }

    const handleMouseMove = (event: any) => {
        // if (!runAgain) return;
        setMoveX([
            moveX[1],
            event.clientX
        ])

        setMoveY([
            moveY[1],
            event.clientY
        ])
        setRunAgain(false)
    }

    // useEffect(() => {
    //     setTimeout(() => setRunAgain(true), 250)
    // }, [runAgain])

    return (
        <SphereST onMouseMove={handleMouseMove} >
            <Point x={getX()} y={getY()} parentSize={600} i1={0} i2={0} />
            {/* <Point x={getX()} y={getY()} parentSize={600} i1={100} i2={100} /> */}

        </SphereST>
    )
}

export default Sphere;