⦁ How long did you spend on the coding assignment?

### About a day and a half

⦁ What would you add to your solution if you had more time?

### I would add some sort of pagination whether that's serverside or another method, pre search results, a page that give's users more detailed information and overall better aesthetics. If I had even more time, I'd do some more research into other APIs to give users information relavant to their selected books, like if they came out as a movie.

⦁ What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

### Redux tool kit!

```
const fetchBooksSlice = {
 initiateFetchBooks: (state: any, action: PayloadAction) => {
   state.loading = true;
 },
 fetchBooksSuccess: (state: any, action: PayloadAction<any>) => {
   const {
     result: { docs },
   } = action.payload;

   const mappedResult = docs.map((item: any) => {
     return {
       ...item,
       publishDate: moment(item.publish_date?.[0]).format("YYYY-MM-DD"),
       authorName: item.author_name?.[0],
     };
   });
   state.loading = false;
   state.bookList = mappedResult;
 },
 fetchBooksError: (state: any, action: PayloadAction) => {
   state.loading = true;
 },
};

const searchBook = createSlice({
 name: "searchBook",
 initialState,
 reducers: {
   ...fetchBooksSlice,
 },
});

export const SearchBookActions = searchBook.actions;
export default searchBook.reducer;
```

⦁ How would you track down a performance issue in production? Have you ever had to do this?

### Yes, I have, usually using profilers like profiler, lighthouse, sentry in additonal to manual testing

⦁ How would you improve the API that you just used?

### The API is extremtly detailed, maybe add an option for a more display friendly verion with less information

⦁ Please describe yourself using correctly formatted JSON.

```
{
  "name":"ryan andrew",
  "likes": ["fitness", "animals", "games", "coding", "travelling"],
  "dislikes": ["peanuts", "folding laundry"],
}
```
