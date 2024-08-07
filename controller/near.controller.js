
const asyncHandler = require('express-async-handler')
const NearSchema = require('./../model/near.model');
const createNearAccount = require('../utils/CreateNearAccount');



// const CreateAccountController = asyncHandler(async(req,res,next)=>{
//     const { creatorname} = req.body
//     try {
  
//     //   const userExist = await NearSchema.findOne({name:creatorname})
//     //   if (userExist) {
//     //     return res.status(409).json({
//     //         status: 'fail',
//     //         msg: creatorname+' already exists please use another name',
//     //     });
//     // }
  
//       const accountDetails = await createNearAccount(creatorname);
//       console.log(accountDetails.transaction)
//       console.log(accountDetails.transaction.public_key)
//       res.json({ success: true, message: "New NEAR account created and saved successfully",creatorname:account.creatorname,id:account._id });
//       // if (accountDetails) {
//       //   const account = await NearSchema.create({ 
//       //     name:creatorname,
//       //     creatorname:accountDetails.transaction.receiver_id ,
//       //     public_key:accountDetails.transaction.public_key,
//       //     receiver_id:accountDetails.transaction.receiver_id
//       //   });

//         // account.save();
//         // console.log(account)

//     //   } else {
//     //     res.status(500).json({ success: false, error: 'An error occurred' });
//     //   }
//     // } catch (error) {
//     //   console.error(error);
//     //   res.status(400).json({
//     //     status: 'fail',
//     //     msg: error.message,
//     //     data: null,
//     // });
//     // }
// })
// const getAccountController = asyncHandler(async(req,res,next)=>{
//     try {
 
//         const getAll = await NearSchema.find();
            
//         res.status(200).json({
//             status: 'success',
//             message: 'All user Account',
//             data: getAll ,
//         });
//     } catch (error) {
//       console.error(error);
//         res.status(500).json({ success: false, error: 'An error occurred' });
//     }
// })

const CreateAccountController = asyncHandler(async(req,res,next)=>{
      const { creatorname} = req.body
      try {
        const accountDetails = await createNearAccount(creatorname);
        res.json({ success: true, message: "New NEAR account created and saved successfully", accountDetails});

         
      } catch (error) {
        res.status(500).json({ message: false, error });
      }
})

module.exports={
    CreateAccountController
    // getAccountController
}
