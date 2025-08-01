using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SkillSync.Models; // Make sure this matches your project's namespace
using System.Diagnostics;

namespace SkillSync.Controllers // Make sure this matches your project's namespace
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        //  THIS METHOD FOR Analyze
        [Authorize]
        public IActionResult Analyze()
        {
            return View();
        }

        //  THIS METHOD FOR THE DASHBOARD PAGE
        [Authorize]
        public IActionResult Dashboard()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
