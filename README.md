# Traffic Signal Management System

This project handles the traffic signal system by dynamically adjusting the signal timings based on the traffic amount in each direction. It uses a **priority queue** structure to manage the priority of each direction, ensuring that the busiest routes get the green light first. The design is aimed at improving traffic flow efficiency and avoiding congestion.

## Live Demo

You can access the live demo of the Traffic Signal Management System [HERE](https://smart-traffic-system.netlify.app/).

## Problem Statement

This interface is built upon a problem statement to implement **deadlock avoidance**. I perceived the traffic situation to be a pseudo-deadlock scenario, where multiple directions compete for green light access without any proper synchronization. Hence, this system uses deadlock prevention strategies by giving priority to high-traffic routes while ensuring fairness to avoid situations resembling a deadlock.

## Features

- **Priority Queue Mechanism**: Uses a priority queue to handle traffic from different directions, prioritizing the direction with the highest traffic.
- **Dynamic Signal Timing**: Signal timings are adjusted in real-time according to the traffic load in each direction.
- **Deadlock Avoidance**: Implements traffic signal logic that avoids traffic deadlock or starvation by ensuring every direction gets a green light eventually.
- **User Interface**: Built using HTML, CSS, and JavaScript to provide a simple yet effective interface for monitoring and controlling the traffic signal system.

## Technology Stack

- **HTML**: Used to structure the interface.
- **CSS**: Used for styling and layout design of the traffic signal interface.
- **JavaScript**: Handles the logic behind traffic management, including signal timing and priority queueing.

## How It Works

1. Each direction (North, South, East, West) is assigned a priority based on the current traffic.
2. A priority queue stores the traffic load from each direction.
3. The direction with the highest traffic gets the green light for a longer duration.
4. When traffic in one direction clears, the next direction in the queue is given priority.
5. The system continuously monitors and updates the traffic load to prevent congestion in any direction.

## Deadlock Avoidance Strategy

- **Priority Adjustment**: If a direction waits too long without getting a green light, the system dynamically adjusts its priority to ensure fairness.
- **Circular Queue Logic**: The traffic system avoids starvation by not allowing any direction to be locked out indefinitely, rotating priorities as necessary.

## Running the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in your preferred browser.
3. The system will automatically simulate traffic and adjust the signal timings based on the current traffic in each direction.

## Future Improvements

- Implement advanced AI-based traffic prediction to further optimize signal timings.
- Add real-time traffic data integration for more accurate traffic control.
- Create an admin panel to manually override the signal timings if needed.

## Conclusion

This project offers a practical solution for traffic management by incorporating deadlock avoidance techniques. It ensures that traffic flows smoothly by dynamically adjusting signal timings according to the traffic load and avoiding congestion. The priority queue structure ensures fairness and efficiency in traffic management.
