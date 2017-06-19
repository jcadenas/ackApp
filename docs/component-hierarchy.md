# React Component Heirarchy

## ApplicationContainer

**LandingContainer**

**AuthFormContainer**
- AuthForm

**HomeContainer**
- Navigation
- Chat

**NavigationContainer**
- Team Nav
  - Team & Settings Drop Down
- Channels & DM Nav
  - Channels Nav
    - Channel Item
  - DM Nav
    - DM Item

**ChatContainer**
- Channel Name
  - Channel Info
- Messages Index
  - Message Items
- New Message Form




|    Path                                 |      Component           |
|-----------------------------------------|--------------------------|
| "/"                                     | "Landing"                |
| "/sign-up" (Auth)                       | "AuthFormContainer"      |
| "/sign-in" (Auth)                       | "AuthFormContainer"      |
| "/main" (Protected)                     | "ChatContainer"          |
