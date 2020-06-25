import React from 'react';
import Particles from "react-particles-js";

import './particles.style.css';

class NewParticles extends React.Component {
    render() {
        return (
            <div>
                <div className='particlesBackground' style={{ position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: "0.3",

                }}>
                    <Particles id="tsparticles" canvasClassName='newCanvas' params={{
                        background: {
                            color: {
                                value: "#0d47a1"
                            }
                        },
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "bubble"
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                    speed: 3
                                },
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4
                                },
                                grab: {
                                    distance: 400,
                                    links: {
                                        opacity: 1
                                    },
                                    connect: {
                                        distance: 800,
                                        links: {
                                            opacity: 0.5
                                        },
                                        radius: 60
                                    }


                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#ffffff"
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 6,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800
                                },
                                value: 80
                            },
                            opacity: {
                                value: 0.5
                            },
                            shape: {
                                type: "triangle"
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        },
                        detectRetina: true
                    }} />

                </div>

            </div>
        )
    }
}

export default NewParticles;