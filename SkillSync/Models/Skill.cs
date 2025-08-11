using System.ComponentModel.DataAnnotations;

namespace SkillSync.Models // Make sure this matches your project's namespace
{
    public class Skill
    {
        [Key] // This marks the Id property as the primary key for the database table.
        public int Id { get; set; }

        [Required] // This ensures that the Name cannot be empty.
        public string Name { get; set; }
    }
}
