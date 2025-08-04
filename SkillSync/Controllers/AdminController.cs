using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; // Required for authorization

namespace SkillSync.Controllers // Make sure this matches your project's namespace
{
    // This attribute will eventually be used to ensure only admins can access these pages.
    // We will set up roles later in the backend phase.
    // [Authorize(Roles = "Admin")] 
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
