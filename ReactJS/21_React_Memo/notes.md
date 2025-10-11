# Problem Faced
- jab bhi parent component re-render ho rha hai, toh uske sath jo child hai (jiska koi state change bhi nhi ho rha), wo Child component bhi parent ke sath re-render ho rha hai
- Iske karan DOM me load aa aa rha kynki ek state ka change other component ko faltu ka re-render kar rha

# Solution
- Memoize

Re-render ka responsible hai --> STATE OR PROPS

# React Memo

- React Memo is a Higher Order Component.
- that memoize a component. [STATE, PROPS]

- It prevents unnecessory re-render by only re-rendering the component when its props/state change.


# Agar hum apne Child ko component ko React.Memo se wrap krde toh unnecessory re-render ni hoga
