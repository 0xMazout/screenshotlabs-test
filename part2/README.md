This readme is used to explain some choices in the Screenshot Labs Frontend Test

About the Figma file:

I had to take some choices :

- The icon on the right top corner of header, i didn't understand why there is this icon, i've replaced it by a theme switcher Dark/Light.
- The fonts, there is a font called ArkProject unavailable online . I've replace this by a classic font
- The block Connect on Header right corner was longer than the others, and it was filled with blank space to fit with the space between behavior , i've reduced it to the same size as the others and set the block to the right side to mimic the same display it's not perfect but it respect best practices.
- When you click on the connect nothing is going on. it was a decision but i think the purpose was not to focused on auth wallet but more on frontend skills

---

The mobile part:

I've made a mobile version of the page, i've used the same design as the desktop version, but i've made some changes :
Resize the top header and use a drop down menu button to display searchbar + theme switcher + Explore , Create , Vision.

---

About the data fetching:

I had to mock some datas :

- The fonts on the right top corner of Content:
- Volume, Royalties , Best Offer and Owners where not available from Alchemy API NFT (in my knowledge)
- I've skipped the show more on the description (For now if i've time i will implement it) we can limit this with a simple css property overflow

-- About the Data filtering:

I had to fake some behavior:

On the filter card i didn't spent time on filter. I've just made a fake behavior to show the filter card and hide it when you click on the filter button again. You can Selects differents filter but it's not updating the content.
