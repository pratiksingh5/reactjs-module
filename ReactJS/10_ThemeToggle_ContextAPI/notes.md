1. React App Setup
2. Created UI for Input type check box --> Toggle Switch
3. Created UI for the Card component having dark mode classes
4. Divide these two into two components 1. ThemeSwitchButton and 2. Card
5. By default, tailwind gives as a class name "dark" for dark mode
6. We have to add the class "dark" in the root of the html page
7. Add dark property in the index.css

8. We have to load the theme on start of the App
    - useEffect
    - document.querySelector("html") --> classList --> add --> "dark"

9. State -> theme -> "dark" , "light" --> useState("dark") --> useEffect(() => {})

10. Toggle -> handleDark , handleLight -> setTheme("dark"), setTheme("light")

11. theme, handleDarkTheme, handlLightTheme ==>> props ==> ToggleSwitch

12. ToggleSwitch ==> accept ==> onChange ==> ???? (handleDark/handleLight)

12. handleToggle ==> (handleDark/handleLight) --> e.targetValue.checked

13. onChange ==> handleToggle