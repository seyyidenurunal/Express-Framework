const isLogin = (req,res,next) => { //Middleware -> Arakatman -- Kullanıcının giriş yapıp yapmadığına göre yönlendirme yapılıyor.
    const isLogin = false;          // başa '/profile' gibi bir parametre eklersek bu özel bir rout için geçerli olur.
                                        
    if(isLogin)
        next();
    else
        res.send("Lütfen giriş yapın.");
};

module.exports = isLogin;