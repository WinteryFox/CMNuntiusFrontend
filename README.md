# Nuntius
<a href="https://cm.com"><img align="right" src="https://www.cm.com/cdn/cm/cm.svg" width=20%></a>
Nuntius is a platform made for the messaging API provided by [CM.com](https://cm.com).

## About

CMNuntiusFrontend is the frontend repository that is supposed to be interactive with the user, thereby it is mandatory that the user experience is accessible.

It is developed by students at [Fontys University of Applied Sciences - Information & Communication Technology](https://fontys.nl).

A description of CMNuntius can be found in [CMNuntius backend](https://github.com/WinteryFox/CMNuntiusFrontend) which is the API repository for CMNuntius frontend.

---

## Getting Started
The following is an instruction on the setup process of this project.

### Prerequisites
* Preferred IDE
* NodeJS

---

## Setup

1. Clone this repository
   ```sh
   git clone https://github.com/WinteryFox/CMNuntiusFrontend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Search vulnerabilities and fix them if required.
   ```sh
   npm audit fix
   ```

## Developing

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
The frontend can now be found at `localhost:3000` but will not work fully without
also installing [CMNuntius backend](https://github.com/WinteryFox/CMNuntiusFrontend).
