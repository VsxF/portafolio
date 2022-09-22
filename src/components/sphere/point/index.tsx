import { FC, ReactNode, useEffect, useState } from "react";
import { PointCSS } from "./style";

const Point: FC<{ x: number, y: number, parentSize: number, i1: number, i2: number }> = ({ x, y, parentSize, i1, i2 }) => {    
    const [posX, setPX] = useState((parentSize / 2) + i1)
    const [posY, setPY] = useState((parentSize / 2 ) + i2)
    const [back, setBack] = useState(false)
    const [backY, setBackY] = useState(false)
    const [limitX, setLimitX] = useState(0);
    const [limitY, setLimitY] = useState(0);

    const [angle, setAngle] = useState(0)
    const [transform, setTransform] = useState("")
    const [opacity, setOpacity] = useState(1)



    const updatePoints = () => {
        const hyp = parentSize/2
        // if (posX > 300) {
        //     if (posY < 300){
                setAngle(Math.atan((300 - posY) / (posX - 300) ))
        //         console.log("so")
        //     }
        // } else {

            setAngle(Math.atan(posY / posX))
        // }

        // setAngle
        setLimitX(hyp * Math.cos(angle))
        setLimitY(posX * Math.tan(angle))
        if (limitX === Infinity) return

        // if (limitX > parentSize /2 + limitX) setLimitX(parentSize /2 + limitX)
        // if (limitX < 0) setLimitX(0)
        // if (limitY > parentSize) setLimitY(parentSize)
        // if (limitY < 1) setLimitY(1)
        // if (posX > parentSize) setPX(parentSize)
        // if (posY > parentSize) setPY(parentSize)
        // if (posX < 0) setPX(0)
        // if (posY < 0) setPY(0)
        console.log("limitX")
        console.log(limitX)
        console.log(posX - 300)
        console.log(angle)

        if (!back) { // si esta en frente
            if (Math.sign(x) === 1) { // si se mueve a la derecha
                console.log("aqui")
                if (limitX <= parentSize) { // si no ha llegado al limite
                    setPX(posX + x * 2)
                } else { // si llego al limite
                    setBack(true)
                }
            } else { // si se mueve a la izquierda
                if (limitX >= 0) { // si no ha llegado al limite
                    setPX(posX + x * 2)
                } else { // si llego al limite
                    setBack(true)
                }
            }
        } else { // si esta atras
            if (Math.sign(x) === 1) { // si se mueve a la derecha
                if (limitX >= 0) { // si no ha llegado al limite
                    setPX(posX - x * 2)
                } else { // si llego al limite
                    setBack(false)
                }
            } else { // si se mueve a la izquierda
                if (limitX <= parentSize) { // si no ha llegado al limite
                    setPX(posX - x * 2)
                } else { // si llego al limite
                    setBack(false)
                }
            }
        }

        if (!backY) { // si esta en frente
            if (Math.sign(y) === 1) { // si se mueve hacia abajo
                if (limitY <= parentSize) { // si no ha llegado al limite
                    setPY(posY + y * 2)
                } else { // si llego al limite
                    setBackY(true)
                }
            } else { // si se mueve hacia arriba
                if (limitY >= 0) { // si no ha llegado al limite
                    setPY(posY + y * 2)
                } else { // si llego al limite
                    setBackY(true)
                }
            }
        } else { // si esta atras
            if (Math.sign(y) === 1) { // si se mueve hacia abjo
                if (limitY >= 0) { // si no ha llegado al limite
                    setPY(posY - y * 2)
                } else { // si llego al limite
                    setBackY(false)
                }
            } else { // si se mueve hacia arriba
                if (limitY <= parentSize) { // si no ha llegado al limite
                    setPY(posY - y * 2)
                } else { // si llego al limite
                    setBackY(false)
                }
            }
        }
        setTransform("translate3d(" + (posX) + "px, " + (posY) + "px, 0px)")

        // const halfPoint = Math.sign(0.5 * parentSize - posY) === 1 ?

                
        const auxOpacity = () => {
            const auxOpacityNum = posY / parentSize
            return Math.sign(posY - 0.5 * parentSize) === 1 ?
                auxOpacityNum : auxOpacityNum * -1
        }
        setOpacity((backY || back) ? 0.5 - auxOpacity() : auxOpacity())

                    // setOpacity(backY ? 
                    //     parentSize * 0.25 / posY : 
                    //     back ? 
                    //         parentSize * 0.25 / posX : 
                    //         parentSize * 0.5 / posY)
        // console.log("auxOpacity()")
        // console.log(auxOpacity())
        // console.log(opacity)
    }
    // setOpacity(1)

    useEffect(updatePoints, [x, y])

    return (
        <PointCSS style={{opacity: 1, transform:transform}}  >word</PointCSS>
    )
}

export default Point;