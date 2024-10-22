const moviesModel = require("../models/moviesSchema");
const reviewModel = require("../models/reviewSchema");



module.exports.homePage = async (req, res) => {
    try {
        let data = await moviesModel.find({});
        return res.render('index', { data });
    } catch (error) {
        console.log(error);
    }
}
module.exports.formLoad= (req,res)=>{
    return res.render('form')
}
module.exports.viewPage = (req, res) => {
    return res.render('reviewlist')
}
module.exports.reviewForm = async(req, res) => {
    try {
        let {id} = req.params
        let data = await moviesModel.findById(id)
        // return res.send(data);
        return res.render('reviewForm',{data})
    } catch (error) {
        console.log(error);
        return res.render('reviewForm')
    }
}
module.exports.addreview=async(req,res)=>{
    try {
        let data = await reviewModel.create(req.body)
        return res.render('reviewlist',{data})
    } catch (error) {
        console.log(error);
        return res.redirect('back');
    }
}
module.exports.CreatMovie = async (req, res) => {
    try {
        await moviesModel.create(req.body);
        return res.redirect('/')
        // return res.json("data is updated")
    } catch (error) {
        console.log(error)
        return res.redirect('/')
    }
}




// module.exports.editpage = async (req, res) => {
//     try {
//         let { id } = req.params;
//         let data = await moviesModel.findById(id);
//         return res.render('edit',{data})
//     } catch (error) {
//         console.log(error);
//         return res.redirect('back');

//     }
// }

// module.exports.updateData = async(req,res)=>{
//     try {
//         let editid= req.params.id
//         let data = await moviesModel.findByIdAndUpdate(editid,req.body)
//         return res.redirect('view',data)
//     } catch (error) {
//         console.log(error);
//         return res.redirect('/')
//     }
// }

// module.exports.deleteData = async (req, res) => {
//     try {
//         let { id } = req.params;
//         await moviesModel.findByIdAndDelete(id);
//         return res.redirect('back');
//     } catch (error) {
//         console.log(error);
//         return res.redirect('back');

//     }
// }