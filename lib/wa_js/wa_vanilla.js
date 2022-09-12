class WaFxMarket
{
  static detectPublicFolder(KEY_STORE)
  {
      var path = window.location.pathname;
      var n1 = path.lastIndexOf("/"+KEY_STORE+"/");
      if (n1>-1)
      {
        path = path.substring(0,n1);
      }
      else
      {
        var n2= path.lastIndexOf("/");
        if (n2>-1)
        {
        path = path.substring(0,n2);
        }
      }

      if (path.length>0)
      {
          if (path.endsWith("/")==false) path +="/";
      }
      return path;
  }
}
