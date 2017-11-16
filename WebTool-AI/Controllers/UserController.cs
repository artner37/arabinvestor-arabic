using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebTool_AI.Controllers
{
    public class UserController : Controller
    {
        public ActionResult Dashboard()
        {
            ViewBag.Message = "Dashboard";
            return View();
        }
        public ActionResult Questionnaire()
        {
            ViewBag.Message = "Questionnaire";
            return View();
        }
        public ActionResult CompanyBrief()
        {
            ViewBag.Message = "CompanyBrief";
            return View();
        }
        public ActionResult CompanyStrategy()
        {
            ViewBag.Message = "CompanyStrategy";
            return View();
        }
    }
}