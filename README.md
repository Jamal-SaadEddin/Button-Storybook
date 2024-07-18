# Button Storybook

This project is part of my frontend internship at Foothill Technology Solutions. The task involves building a button component with Storybook integration and publishing it to Chromatic.

## Overview

The button component is designed to be reusable and customizable, with three variants and three different sizes. The variants include Primary, Secondary, and Text. Each variant has specific styling to meet the requirements specified in the task.

### Variants

1. **Primary**: Has a background that matches the border.
2. **Secondary**: Has a white background with a border that matches the text color.
3. **Text**: Has no background and no outline, and shows an underline when the user hovers over it.

### Sizes

1. **Large**
2. **Medium**
3. **Small**

## Demo

You can view a live demo of the component on Chromatic: [Demo Link](https://6698d5c2138fc282f9299726-ejbvygdhhe.chromatic.com/)

## Task Requirements

1. **Button Component**: Build a button component with three variants and three sizes.
2. **Storybook Integration**: Showcase the component in Storybook.
3. **Chromatic Publishing**: Publish your changes to Chromatic.

## Prerequisites

To run this project locally, you need to have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Clone and Run Storybook Locally

Follow these steps to clone the repository and run Storybook locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Jamal-SaadEddin/Button-Storybook.git
   cd Button-Storybook
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run Storybook**:
   ```sh
   npm run storybook
   ```

4. **Open your browser**:
   Navigate to `http://localhost:6006` to view the Storybook interface.

## How to Publish to Chromatic

1. **Set up Chromatic**:
   Ensure you have your Chromatic project token set up as an environment variable.

2. **Publish to Chromatic**:
   ```sh
   npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN
   ```

## Authors
- [@Jamal-SaadEddin](https://github.com/Jamal-SaadEddin)

## Acknowledgements
- This task is part of the Foothill Technology Solutions Internship Cycle.
- Big thanks to my trainer [@Huthaifa](https://github.com/Huthaifa-Dev)
<img src="https://github.com/Jamal-SaadEddin/TodoTick/assets/104212352/9d3c83b0-5ea8-46ff-93e8-f1504af9dc67" width="400" alt="foothill logo">


---

Thank you for visiting my project! Feel free to star or contribute to the repository if you find it useful.
