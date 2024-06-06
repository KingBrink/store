//create products and store it on the local storage
let products = JSON.parse(localStorage.getItem('products')) ? JSON.parse
(localStorage.getItem('products')) : localStorage.setItem(
    'products',
    JSON.stringify(
        [
            {
                id: 1,
                productName:"PEACHY KEEN DREAM",
                category:"smoothie",
                description:"2 ripe peaches, sliced (fresh or frozen), 1 banana, sliced (fresh or frozen), 1/2 cup Greek yogurt or dairy-free yogurt, 1/2 cup almond milk or any milk of your choice, 1 tablespoon honey or maple syrup (optional, depending on sweetness preference), Ice cubes (optional, for a colder smoothie)",
                amount:39.99,
                img_url:"https://kingbrink.github.io/all-images/images/health3.jpg"
            },
            {
                id: 2,
                productName: "RASPBERRY RUSH REFRESHER",
                category : "smoothie",
                description : "1 cup raspberries (fresh or frozen), 1/2 cup strawberries (fresh or frozen), 1/2 cup plain yogurt or dairy-free yogurt, 1/2 cup orange juice or apple juice, 1 tablespoon honey or maple syrup (optional), Ice cubes (optional)",
                amount : 39.99,
                img_url:"https://kingbrink.github.io/all-images/images/health4.jpg"
            },
            {
                id: 3,
                productName: "BERRYLICIOUS BURST",
                category : "smoothie",
                description : "1/2 cup mixed berries (such as strawberries, blueberries, and blackberries) (fresh or frozen), 1 banana, sliced (fresh or frozen), 1/2 cup spinach or kale leaves (optional, for added nutrition), 1/2 cup coconut water or any juice of your choice, 1/4 cup Greek yogurt or dairy-free yogurt, Ice cubes (optional)",
                amount : 39.99,
                img_url:"https://kingbrink.github.io/all-images/images/health5.jpg"
            },
            {
                id: 4,
                productName: "CITRUS CRUSH CREATION",
                category : "smoothie",
                description : "1 orange, peeled and segmented, 1/2 cup pineapple chunks (fresh or frozen), 1/2 cup mango chunks (fresh or frozen), 1/2 cup plain yogurt or dairy-free yogurt, 1/2 cup coconut water or any juice of your choice, Ice cubes (optional)",
                amount : 39.99,
                img_url:"https://kingbrink.github.io/all-images/images/health6.jpg"
            },
            {
                id: 5,
                productName: "DRAGON FIRE FUSION",
                category : "smoothie",
                description : "1 dragon fruit (pitaya), peeled and diced, 1 banana, sliced (fresh or frozen), 1/2 cup mixed berries (such as strawberries and raspberries) (fresh or frozen), 1/2 cup coconut milk or any milk of your choice,  1 tablespoon honey or maple syrup (optional), Ice cubes (optional)",
                amount : 39.99,
                img_url:"https://kingbrink.github.io/all-images/images/health7.jpg"
            },
            {
                id: 6,
                productName: "Harvest Harmony Bowl",
                category : "salad",
                description : "Lettuce (such as iceberg, romaine, or mixed greens), Tomatoes, Cucumbers, Carrots, Red onion, Bell peppers, Radishes, Optional toppings: croutons, sunflower seeds, shredded cheese",
                amount : 55.99,
                img_url:"https://kingbrink.github.io/all-images/images/health11.jpg"
            },
            {
                id: 7,
                productName: "Chicken Caesar Crunch",
                category : "salad",
                description : "Romaine lettuce, Caesar dressing (typically made with anchovies, garlic, egg yolk, Dijon mustard, lemon juice, olive oil, and Parmesan cheese), Croutons,  Shaved or grated Parmesan cheese, Optional: grilled chicken or shrimp",
                amount : 78.99,
                img_url:"https://kingbrink.github.io/all-images/images/health15.jpg"
            },
            {
                id: 8,
                productName: "Fresh Field Fare",
                category : "salad",
                description : "Tomatoes, Cucumbers, Red onion, Kalamata olives, Feta cheese, Oregano, Olive oil, Optional: bell peppers, pepperoncini peppers, lettuce",
                amount : 89.99,
                img_url:"https://kingbrink.github.io/all-images/images/health13.jpg"
            },
            {
                id: 9,
                productName: "Greek Goddess Wrap",
                category : "wrap",
                description : "Grilled chicken or gyro meat (thinly sliced), Tzatziki sauce, Lettuce, Tomato slices, Red onion slices, Cucumber slices, Feta cheese crumbles, Kalamata olives, Warm pita or flatbread",
                amount : 119.99,
                img_url:"https://kingbrink.github.io/all-images/images/health17.jpg"
            },
            {
                id: 10,
                productName: "Southwest Fiesta Wrap",
                category : "wrap",
                description : "Grilled or shredded chicken, Black beans (cooked and seasoned), Corn kernels (fresh or cooked), Diced tomatoes, Avocado slices or guacamole, Shredded lettuce, Shredded cheese (such as cheddar or Monterey Jack), Salsa or pico de gallo, Sour cream or Greek yogurt (optional), Flour tortillas or spinach wraps",
                amount : 99.99,
                img_url:"https://kingbrink.github.io/all-images/images/health18.jpg"
            }
        ]
    )
)