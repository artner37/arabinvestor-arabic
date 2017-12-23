using System.Web;
using System.Web.Optimization;

namespace WebTool_AI
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-1.12.4.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/arabinvestor").Include(
                      "~/Scripts/paper-dashboard.js",
                      "~/Scripts/bootstrap-notify.js",
                      "~/Scripts/moment.js",
                      "~/Scripts/bootstrap-datetimepicker.js",
                      "~/Scripts/jquery-ui-slider-pips.js",
                      "~/amcharts/amcharts.js", 
                      "~/amcharts/radar.js", 
                      "~/amcharts/serial.js",
                      "~/amcharts/themes/black.js",
                      "~/Scripts/demo.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatablejs").Include(
                      "~/Scripts/Datatables/jquery.dataTables.js",
                      "~/Scripts/Datatables/dataTables.bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                      "~/Scripts/jquery-ui-1.12.1.js"));

            bundles.Add(new ScriptBundle("~/bundles/rtljs").Include(
                      "~/Scripts/custom-rtl.js"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
              "~/Content/themes/base/jquery-ui.css", "~/Content/jquery.ui.slider-rtl.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap/rtl").Include(
              "~/Content/css/bootstrap-rtl.css", "~/Content/css/custom-rtl.css", "~/Content/css/rtl.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap/loginrtl").Include(
              "~/Content/css/bootstrap-rtl.css", "~/Content/css/login-rtl.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/paper-dashboard.css", "~/Content/bootstrap-datetimepicker.css", "~/Content/demo.css", "~/Content/animate.css", "~/Content/themify-icons.css", "~/Content/font-awesome.css", "~/Content/jquery-ui-slider-pips.css"));

            bundles.Add(new StyleBundle("~/Content/logincss").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Login.css", "~/Content/animate.css", "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/tablecss").Include(
                      "~/Content/DataTables/css/dataTables.bootstrap.min.css"));
        }
    }
}
