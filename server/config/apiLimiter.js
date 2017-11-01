import rateLimiter from 'express-rate-limit'

export const generalLimiter = new rateLimiter({
  windowMs: 60*1000,
  delayAfter: 0,  //delay disabled
  max: 20,
})

export const authLimiter = new rateLimiter({
  windowMs: 60*1000,
  delayAfter: 0,  //delay disabled
  max: 5,
})

export const overLimit = (req, res, next) => {
  // console.log(req.rateLimit)
  if(req.rateLimit.remaining > 0){
    next()
  } else {
    res.status(429).json({ message: 'Too Many Requests'})
  }
}
