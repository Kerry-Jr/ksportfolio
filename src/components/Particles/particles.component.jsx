import React from 'react';
import Particles from "react-particles-js";

import './particles.style.css';

class NewParticles extends React.Component {
    render() {
        return (
            <div className='container fluid sCanvas'>
                <div className='particlesBackground' style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: "1"
                }}>
                    <Particles id="particles-js" params={{
                        background: {
                            color: {
                                value: "#000000"
                            }
                        },
                        fpsLimit: 144,
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                    color: {
                                        value: "#FF0000"
                                    }
                                },
                                resize: true
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 10,
                                    size: 10,
                                    speed: 3
                                },
                                push: {
                                    quantity: 4,
                                    particles_nb: 4
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4
                                },
                                grab: {
                                    distance: 250,
                                    line_linked: {
                                        opacity: 1
                                    }
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "random"
                            },
                            links: {
                                color: "#FFFFFF",
                                distance: 150,
                                enable: false,
                                opacity: 7,
                                width: 1
                            },
                            collisions: {
                                enable: true
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 6,
                                straight: false
                            },
                            number: {
                                density: {
                                    enable: true,
                                    value_area: 800
                                },
                                value: 75
                            },
                            opacity: {
                                value: 1
                            },
                            shape: {
                                type: 'circle'
                            },
                            size: {
                                random: false,
                                value: 5,
                                // speed: 40
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