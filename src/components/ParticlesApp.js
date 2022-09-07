import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesApp = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Particles 
            id="tsparticles"
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={{
                fpsLimit: 120,
                background: {
                    color: "transparent"
                },
                interactivity: {
                    events: {
                        onClick: { 
                            enable: false, 
                            mode: "push" 
                        },
                        onHover: {
                            enable: false,
                            mode: "repulse",
                            parallax: { 
                                enable: false, 
                                force: 60, 
                                smooth: 10 
                            }
                        },
                        resize: true
                    },
                    modes: {
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
                    color: { value: "#fff" },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 0.2,
                        straight: true
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 100
                        },
                        value: 15
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            speed: 0.02,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min"
                        },
                        value: {
                            min: 0,
                            max: 0.5
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 1 }
                    }
                }}}
        />
    );
};

export default ParticlesApp;