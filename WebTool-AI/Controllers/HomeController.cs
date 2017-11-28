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
        public ActionResult Companylist()
        {
            ViewBag.Message = "Company List";
            return View();
        }
        public ActionResult CompanyReport()
        {
            ViewBag.Message = "Company Report";
            return View();
        }
        public ActionResult EachAssessorReport()
        {
            ViewBag.Message = "Each Assessor Report";
            return View();
        }
    }
}