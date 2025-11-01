1. How React Bundles All Files Together (Before Lazy Loading)

CRA/Vite ke build process mein sab JS files ek “main bundle” mein merge ho jaati hain.
Browser jab pehli baar app kholta hai → pura bundle download hota hai → fir app start hoti hai.
Matlab: User ko sare pages ka code download karna padta hai, chahe use ek hi page dekhna ho.

2. Why Large React Apps Face Performance Issues?

Jab app bada ho jaata hai, toh build time pe React sab files ko ek bundle mein pack kar deta hai.
Jaise app.js, dashboard.js, about.js sab ek sath load honge → file size badh jaati hai → first load slow ho jaata ha











3. What is Code Splitting?

Code splitting ka matlab hota hai apne React app ke code ko chhote-chhote parts (chunks) mein todna — taaki browser sirf wahi part load kare jo abhi user ko chahiye.
Example: “User login page par hai, toh dashboard ka code abhi load karne ki zarurat nahi.”


4. What Lazy Loading Solves

Lazy loading ka main aim hai performance improve karna.
Sirf wahi component ya route load hota hai jab user us page par jaata hai.
Isse initial bundle size chhota ho jaata hai → app fast load hoti hai.

5. How to Implement React.lazy()

6. How <Suspense> Works (Fallbacks, Loaders)

7. Kya Suspense sirf Routing me lagate hai?

🧠 Tree Shaking vs Code Splitting
Concept	Purpose	When It Happens
Tree Shaking	Remove unused code from the bundle	During build
Code Splitting	Split bundle into smaller chunks (load on demand)	During runtime/navigation

In short:
🪓 Tree shaking removes waste
✂️ Code splitting divides load smartly