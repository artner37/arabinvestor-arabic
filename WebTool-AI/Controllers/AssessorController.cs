using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebTool_AI.Controllers
{
    public class AssessorController : Controller
    {
        public ActionResult Dashboard()
        {
            ViewBag.Message = "Dashboard";
            return View();
        }
        public ActionResult Report()
        {
            ViewBag.Message = "Report";
            return View();
        }
    }
}