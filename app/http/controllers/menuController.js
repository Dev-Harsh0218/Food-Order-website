const Menu= require('../../models/menu')
function menuControl(){
    return{
       async menu(req,res){
        var cate_item_assoc = {};
        const category_query_res = await Menu.distinct("i_category");
        // Array to store all promises  
        const promises = category_query_res.map(item =>
            Menu.find({ i_category: item }, { i_name: 1, i_price: 1, i_category: 1 })
        );

        // Wait for all promises to resolve
        await Promise.all(promises).then(results => {
            results.forEach((result, index) => {
                cate_item_assoc[category_query_res[index]] = result;
            });
        // Now, the associative array should be fully populated
        });
        // console.log(cate_item_assoc[category_query_res[0]]);
        return res.render('menu/menu',{category:category_query_res,items_assoc:cate_item_assoc})
        }
    }
}
module.exports=menuControl




// var cate_item_assoc ={};
// var count=0;
// const category_query_res = await Menu.distinct("i_category").then(function(category_query_res){
//     var resu={};
//     category_query_res.forEach(item =>{
//          const cate_items = Menu.find({i_category:item},{i_name:1,i_price:1,i_category:1}).then(results =>{ 
//             resu=results;
//             console.log(resu)
//             cate_item_assoc[item]=resu;
//          })
//     })
//     console.log(cate_item_assoc["Beverages"])
// })