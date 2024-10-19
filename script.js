class Direction {
    constructor(name) {
        this.name = name;
        this.waitingVehicles = 0;
        this.element = document.getElementById(name.toLowerCase());
    }

    addVehicle() {
        this.waitingVehicles++;
        this.updateDisplay();
    }

    removeVehicle() {
        if (this.waitingVehicles > 0) {
            this.waitingVehicles--;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        this.element.querySelector('.count').textContent = this.waitingVehicles;
    }

    setLightState(state) {
        const lights = this.element.querySelectorAll('.light');
        lights.forEach(light => light.classList.remove('active'));
        switch(state) {
            case 'red':
                lights[0].classList.add('active');
                break;
            case 'yellow':
                lights[1].classList.add('active');
                break;
            case 'green':
                lights[2].classList.add('active');
                break;
        }
    }
}

class Intersection {
    constructor() {
        this.directions = [
            new Direction('North'),
            new Direction('South'),
            new Direction('East'),
            new Direction('West')
        ];
        this.currentGreenDirection = null;
    }

    addRandomTraffic() {
        this.directions.forEach(direction => {
            if (Math.random() < 0.7) {
                direction.addVehicle();
            }
        });
    }

    processTraffic() {
        const sortedDirections = [...this.directions].sort((a, b) => b.waitingVehicles - a.waitingVehicles);
        const directionToProcess = sortedDirections[0];

        if (directionToProcess.waitingVehicles > 0) {
            if (this.currentGreenDirection) {
                this.currentGreenDirection.setLightState('yellow');
                setTimeout(() => {
                    this.currentGreenDirection.setLightState('red');
                }, 1000);
            }

            setTimeout(() => {
                directionToProcess.setLightState('green');
                this.currentGreenDirection = directionToProcess;

                const vehiclesProcessed = Math.min(directionToProcess.waitingVehicles, 2);
                for (let i = 0; i < vehiclesProcessed; i++) {
                    directionToProcess.removeVehicle();
                }

                this.log(`Processed ${vehiclesProcessed} vehicles from ${directionToProcess.name}`);
            }, this.currentGreenDirection ? 2000 : 0);
        } else {
            this.log("No vehicles to process");
        }
    }

    log(message) {
        const logElement = document.getElementById('log');
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        const timestamp = new Date().toLocaleTimeString();
        logEntry.innerHTML = `<span class="log-time">[${timestamp}]</span> ${message}`;
        logElement.appendChild(logEntry);
        logElement.scrollTop = logElement.scrollHeight;
    }
}

const intersection = new Intersection();

document.getElementById('addTraffic').addEventListener('click', () => {
    intersection.addRandomTraffic();
});

document.getElementById('processTraffic').addEventListener('click', () => {
    intersection.processTraffic();
});


intersection.directions.forEach(dir => dir.setLightState('red'));
