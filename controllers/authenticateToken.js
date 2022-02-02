import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token == null)
    return res.status(401).json({
      auth: false,
      message: 'no authorization',
    });

  jwt.verify(
    token,
    '8301bdcb1bc7550ca456295a4819d7b249bf02082ea00a20e6c78fafac4ffea214122197d7a7f270a28439405f328169b6b63367049a3773b287730506859815',
    (err, user) => {
      if (err)
        return res.status(403).json({
          auth: false,
          message: 'no access',
        });

      req.user = user; //* will give the payload back like we have given
      //* email in payload so it will return that object
      //* res.send(req.user.email) ;

      next();
    }
  );
};
