categories = ['Top', 'Bottoms', 'Shoes', "Dress", 'Accessory', 'Socks']
# colors = ['Red', 'Black', 'Blue', 'Purple', 'White', 'Pink', 'Green', 'Fuchsia', 'Orange', 'Gold']
sizes = ['Extra-Small', 'Small', 'Medium', 'Large', 'Extra-large']
conditions = ['New', 'Like New', 'Gently Used', 'Normal Wear', 'Heavily Used', 'Destroyed Chic']

puts "Deleting old data"

User.destroy_all
Clothing.destroy_all
Swap.destroy_all
SwapUser.destroy_all
SwapClothing.destroy_all

puts "Seeding new data"

sarah = User.create!(username: "Sarah", password: "admin", bio: "My style is anything fun and comfortable. Summer is my favorite season - the warmer the weather, the happier I am!", image_url: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80", spirit_color: "#7819eb", admin: true)
grant = User.create!(username: "Grant", password: "admin", bio: "Really into vintage stuff right now. The 'Destroyed-Chic' category on Style Swap is my go-to. Hit me up if you're looking to get rid of some old clothes.", image_url: "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80", spirit_color: "#1b21d0", admin: true)
matt = User.create!(username: "Matt", password: "admin", bio: "", image_url: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=852&q=80", spirit_color: "#29819e", admin: true)
charlie = User.create!(username: "Charlie", password: "admin", bio: "", image_url: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=804&q=80", spirit_color: "#138b27", admin: true)
alyssa = User.create!(username: "Alyssa", password: "admin", bio: "", image_url: "https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80", spirit_color: "#d16615", admin: true)
olivia = User.create!(username: "Olivia", password: "admin", bio: "", image_url: "https://images.unsplash.com/photo-1542157585-ef20bfcce579?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80", spirit_color: "#ea1084", admin: true)




# 10.times do
#     User.create(username: Faker::Name.first_name+(Faker::Number.number(digits: 3).to_s), password_digest: BCrypt::Password.create('admin'), bio: Faker::Movie.quote, spirit_color: Faker::Color.hex_color, image_url: Faker::LoremFlickr.image)
# end

# 40.times do
#     Clothing.create(name: Faker::Quote.robin, category: categories.sample, color: Faker::Color.color_name, brand: Faker::Company.name, size: sizes.sample, condition: conditions.sample, image_url: Faker::LoremFlickr.image, description: Faker::TvShows::Friends.quote, value: Faker::Number.number(digits: 2), user_id: User.ids.sample)
# end

Clothing.create(name: "Black Shirt", category: "Top", color: "Black", brand: "Gap", size: sizes.sample, condition: conditions.sample, image_url: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/batch-1/99056-20vw/99056-20VW_B.tif?impolicy=myresize&rw=700", description: "A simple black tee", value: 10, user_id: sarah.id)

Clothing.create(name: "Red Pants", category: "Bottoms", color: "Red", brand: "Levi's", size: sizes.sample, condition: conditions.sample, image_url: "https://images.www.fendi.com/images/hae/h99/9148835495966/FR6293AC4GF1DOO_01_large-grey", description: "Spice up your life!", value: 25, user_id: sarah.id)

Clothing.create(name: "Brown Loafers", category: "Shoes", color: "Brown", brand: "Salvatore Ferragamo", size: sizes.sample, condition: conditions.sample, image_url: "https://images.neimanmarcus.com/ca/3/product_assets/N/5/U/M/Y/NMN5UMY_mz.jpg", description: "It doesn't get much fancier than this.", value: 300, user_id: grant.id)

Clothing.create(name: "Purple Blouse", category: "Top", color: "Purple", brand: "Vince", size: sizes.sample, condition: conditions.sample, image_url: "https://cdna.lystit.com/photos/f182-2016/01/21/dolce-gabbana-purple-blouse-in-silk-chiffon-with-bow-product-3-812594219-normal.jpeg", description: "Show off that purple pride (go 'Cats!)", value: 40, user_id: sarah.id)

Clothing.create(name: "Green Scarf", category: "Accessory", color: "Green", brand: "Free People", size: sizes.sample, condition: conditions.sample, image_url: "https://www.englisheccentrics.com/wp-content/uploads/2018/11/Silk-square-scarf-Tapestry-Green-EE015S_008-01.jpg", description: "Chic and eco-friendly", value: 30, user_id: sarah.id)

Clothing.create(name: "Pink Dress", category: "Dress", color: "Pink", brand: "Dress the Population", size: sizes.sample, condition: conditions.sample, image_url: "https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/15155911/gallery_hero_59b3f3d9-7683-4522-b5c4-6656b8761832.png", description: "Channel your inner Barbie", value: 200, user_id: olivia.id)

Clothing.create(name: "Blue Pants", category: "Bottoms", color: "Blue", brand: "Zara", size: sizes.sample, condition: conditions.sample, image_url: "https://images.express.com/is/image/expressfashion/0092_09191526_2567_a001?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon", description: "A bold pop of color.", value: 12, user_id: sarah.id)

Clothing.create(name: "Silver Blazer", category: "Silver Blazer", color: "Silver", brand: "Halston", size: sizes.sample, condition: conditions.sample, image_url: "https://www.dhresource.com/0x0/f2/albu/g7/M00/55/E1/rBVaSVtDJjGAe1YzAAI2UxTnx4Y824.jpg", description: "All eyes on you.", value: 210, user_id: grant.id)

Clothing.create(name: "Black Boots", category: "Shoes", color: "Black", brand: "Frye", size: sizes.sample, condition: conditions.sample, image_url: "https://n.nordstrommedia.com/id/sr3/813a1d16-0015-4983-839a-b8879a50e1db.jpeg?h=365&w=240&dpr=2", description: "A perfect staple pair for your closet.", value: 150, user_id: sarah.id)

Clothing.create(name: "Gold Watch", category: "Accessory", color: "Gold", brand: "Fossil", size: sizes.sample, condition: conditions.sample, image_url: "https://fossil.scene7.com/is/image/FossilPartners/BQ2542_main?$sfcc_fos_hi-res$", description: "Never be late again.", value: 175, user_id: grant.id)


# 4.times do
#     Swap.create(start: Faker::Time.between(from: DateTime.now, to: DateTime.now - 1), end: Faker::Time.between(from: DateTime.now + 1, to: DateTime.now + 2), name: Faker::Subscription.plan)
# end

Swap.create(start: "2021-08-05 16:45:00 -0400", end: "2021-08-05 16:50:00 -0400", name: "Swap 1")
Swap.create(start: "2021-08-06 11:45:00 -0400", end: "2021-08-06 12:00:00 -0400", name: "Swap 2")
Swap.create(start: "2021-08-06 12:30:00 -0400", end: "2021-08-06 12:45:00 -0400", name: "Swap 3")
Swap.create(start: "2021-08-06 13:30:00 -0400", end: "2021-08-06 14:30:00 -0400", name: "Swap 4")
Swap.create(start: "2021-08-06 14:30:00 -0400", end: "2021-08-06 17:30:00 -0400", name: "Swap 5")
Swap.create(start: "2021-08-06 16:20:00 -0400", end: "2021-08-06 18:30:00 -0400", name: "Swap 6")
Swap.create(start: "2021-08-06 15:50:00 -0400", end: "2021-08-06 22:00:00 -0400", name: "Swap 7")


# 15.times do
#     SwapUser.create(user_id: User.ids.sample, swap_id: Swap.ids.sample, credits: Faker::Number.number(digits: 1))
# end

# 15.times do
#     SwapClothing.create(clothing_id: Clothing.ids.sample, swap_id: Swap.ids.sample, prev_owner_id: User.ids.sample)
# end

# Swap.create(start: DateTime.now + 1, end: DateTime.now + 2, name: "Test Swap")

puts 'Seeded new data!'