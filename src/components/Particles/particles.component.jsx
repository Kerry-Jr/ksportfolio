import React from 'react';
import Particles from "react-particles-js";

import './particles.style.css';

class NewParticles extends React.Component {
    render() {
        return (
            <div className='container fluid sCanvas'>
                <div className='particlesBackground'  style={{ position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: "0.9"
                }}>
                    <Particles id="tsparticles" params={{
                        background: {
                            color: {
                                value: "#FFFFFF"
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
                                    duration: 0,
                                    opacity: 0.8,
                                    size: 40,
                                    speed: 3
                                },
                                push: {
                                    quantity: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#43bfb5"
                            },
                            links: {
                                color: "#000000",
                                distance: 150,
                                enable: true,
                                opacity: 0.9,
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
                                value: 0.9
                            },
                            shape: {
                                type: "triangle"
                            },
                            size: {
                                random: true,
                                value: 5
                            }
                        },
                        detectRetina: false
                    }} />

                </div>

            </div>
        )
    }
}

export default NewParticles;