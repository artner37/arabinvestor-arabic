using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebTool_AI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Dashboard";
            return View();
        }
        public ActionResult ProjectManagement()
        {
            ViewBag.Message = "ProjectManagement";
            return View();
        }
        public ActionResult FirstLevelQuestion()
        {
            ViewBag.Message = "FirstLevelQuestion";
            return View();
        }
        public ActionResult SecondLevelQuestion()
        {
            ViewBag.Message = "SecondLevelQuestion";
            return View();
        }
        public ActionResult ManagerUser()
        {
            ViewBag.Message = "ManagerUser";
            return View();
        }
        public ActionResult ManageCriteria()
        {
            ViewBag.Message = "ManagerCriteria";
            return View();
        }
        public ActionResult ReviewAnswers()
        {
            ViewBag.Message = "ReviewAnswers";
            return View();
        }
    }
}