This readme is used to explain some choices in the Screenshot Labs Frontend Test

The Website is hosted on Vercel
https://screenshotlabs-test.vercel.app/

Explanations and Tradeoffs:
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

The mobile UI is not perfect but it's a good start and i had to make decisions without a mobile figma file.

---

About the data fetching:

I had to mock some datas :

- The fonts on the right top corner of Content:
- Volume, Royalties , Best Offer and Owners where not available from Alchemy API NFT (in my knowledge)
- I've skipped the show more on the description (For now if i've time i will implement it) we can limit this with a simple css property overflow

- I've mocked some Properties Data to avoid to spend time on this part, i've just made a fake behavior to show the properties card and hide it when you click on the properties button again. You can Selects differents properties but it's not updating the content.

-- About the Data filtering:

I had to fake some behavior:

On the filter card i didn't spent time on filter. I've just made a fake behavior to show the filter card and hide it when you click on the filter button again. You can Selects differents filter but it's not updating the content.

On the Results card i've made a simple filter on the name of the nft. You can search for a nft by name. The filters won't apply on the search.

The Tab Switching View (Grid to List) is not implemented

The sorting Price:Low to High .. is not implemented

--

The Theme Switcher :

It was unecessary but for me Theme Switching is very important and having a Website without this possibility is clearly a no-go for me. I've made a simple theme switcher with a toggle button and a css variable to switch to Light or Dark.

--

The API limitation : You can only call 100 nfts at one time.

This was a bit messy for me. I've tried an infinite scrolling but it was not working and i was late on the delivery. So Cut the crap and keep going.
I've made a simple pagination with a button to load the next 100 nfts.
Launching 77 calls to the api to fetch all the nfts was not acceptable.

Thanks for reading me and i hope you will enjoy my work.

--

The Website is hosted on Vercel
https://screenshotlabs-test.vercel.app/

But there is the problem Vercel doesn't want to load too much images from an external source. It required to pay for this with the Error Payment required

OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED

So some images are not loading but in local env it's working fine.
