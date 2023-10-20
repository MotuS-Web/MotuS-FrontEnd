<div align="center">
    <img width="720px" src="https://github.com/MotuS-Web/MotuS-FrontEnd/assets/35104213/f138f900-a288-49ec-ae92-ee70525beb36" />
    <br/>
    <h2>MotuS ─ Non-Face-to-Face Exercise Learning Platform<br/>Frontend Repository</h2>
</div>

### [Check README.md in Korean](https://github.com/MotuS-Web/MotuS-FrontEnd/blob/master/README.md)

---

## 🔥 Main Contributor

|                                      SoHyun Oh                                   |                                    KyungJae Kim                                      |
| :------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| <img width="150px" src="https://avatars.githubusercontent.com/u/53892427?v=4" /> | <img width="150px" src="https://avatars.githubusercontent.com/u/35104213?v=4" /> |
|                                    Hallym University                          |                                    Hallym University                               |
|                               Computer Engineering 4th                             |                              Computer Engineering 2th                            |
|                  [@osohyun0224](https://github.com/osohyun0224)                  |                   [@PortalCube](https://github.com/PortalCube)                   |

## 🧑🏻‍💻 How to Setup

1. Clone the repository and navigate to the cloned directory.

```bash
git clone https://github.com/MotuS-Web/MotuS-FrontEnd
cd MotuS-FrontEnd
```

2. Open the .env file, delete all temporary values, and enter the URLs for your pre-configured Spring and AI services.

```env
VITE_SPRING_URL=[Spring Service URL]
VITE_AI_URL=[AI Service URL]
```

3. Ensure you have Node v18 or above installed, and then run the following commands to start the development server.

```cmd
npm install
npm start build
npm run dev
```

Note: If you are planning to deploy this repository to production, make sure to deploy in an HTTPS environment to ensure access to users' webcams.

## 📚 Libraries

|     **Stack**     |            **Version**            |                                                                                                             **Why**                                                                                                             |
| :---------------: | :-------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       React       |             `18.2.0`              |                Adopted due to its active open-source ecosystem compared to other frameworks. It allows component-based development which is great for collaboration and offers superior productivity.                    |
|       Redux       |              `8.1.2`              |Adopted as a state management container because all state updates are defined as actions. These actions update the state in the Reducer, making it easier to predict and maintain. |
| @reduxjs/toolkit  |              `1.9.5`              |     Introduced to reduce boilerplate code when using Redux. It provides tools and helpers required for writing Redux code, simplifies immutable state updates, and makes asynchronous tasks easier to manage.    |
| Styled-Components |              `6.0.6`              |                                                                                    Adopted for the benefits of CSS-in-JS, improving the productivity of style writing.                                                                                      |
|       axios       |              `1.5.0`              |                                                                                                  Introduced for API communication.                                                                                            |
|      Vercel       | [Link](motus-frontend.vercel.app) |                                Aiding collaboration with other development teams by hosting on Vercel for easier progress checks. Also, used as a build tool to instantly detect errors during development.                                 |

## 💡 Contribution

Thank you for contributing to the MotuS frontend repository! Please check the contribution guide a [CONTRIBUTING.md](CONTRIBUTING.md)
