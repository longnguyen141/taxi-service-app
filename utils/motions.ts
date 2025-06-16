export function slideInFromTop(delay: number) {
    return {
        hidden: {y: -100, opacity:0},
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}

export const fadeIn = (direction: "up" | "down", delay: number) => {
    return {
        hidden: {
            y: direction === "up" ? 80 : direction ==="down" ? "-80" :0,
            opacity: 0,

            x: direction === "up" ? 80 : direction === "down" ? "-80" : 0
        },
        show: {
            y:0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25,0.25,0.25,0.75]
            }
        }
    }
}


export function slideInFromRight(delay: number) {
    return {
        hidden: {x:100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}

export function slideInFromLeft(delay: number) {
    return {
        hidden: {x: -100, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay
            }
        }
    }
}