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
                        "~/Scripts/jquery-{version}.js"));

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
                      "~/Scripts/chartist.min.js",
                      "~/Scripts/bootstrap-notify.js",
                      "~/amcharts/amcharts.js", 
                      "~/amcharts/radar.js", 
                      "~/amcharts/themes/black.js",
                      "~/Scripts/demo.js"));

            bundles.Add(new ScriptBundle("~/bundles/datatablejs").Include(
                      "~/Scripts/Datatables/jquery.dataTables.js",
                      "~/Scripts/Datatables/dataTables.bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                      "~/Scripts/jquery-ui-1.12.1.js"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
              "~/Content/themes/base/jquery-ui.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/paper-dashboard.css", "~/Content/demo.css", "~/Content/animate.css", "~/Content/themify-icons.css", "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/logincss").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/Login.css", "~/Content/animate.css", "~/Content/font-awesome.css"));

            bundles.Add(new StyleBundle("~/Content/tablecss").Include(
                      "~/Content/DataTables/css/dataTables.bootstrap.min.css"));
        }
    }
}
