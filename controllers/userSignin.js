import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const userSignin = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user) {
      if (user.authenticate(req.body.password)) {
        const user_payload = { email: req.body.email }; //* payload

        const accessToken = jwt.sign(
          user_payload,
          '8301bdcb1bc7550ca456295a4819d7b249bf02082ea00a20e6c78fafac4ffea214122197d7a7f270a28439405f328169b6b63367049a3773b287730506859815',
          {
            expiresIn: '3h',
          }
        );

        return res.status(200).json({
          jwt_token: accessToken,
          message: 'login successfully',
          user,
        });
      } else {
        return res.status(201).json({
          message: 'Wrong password!!',
        });
      }
    } else {
      return res.status(202).json({
        message: 'not registered!! register first',
      });
    }
  });
};
