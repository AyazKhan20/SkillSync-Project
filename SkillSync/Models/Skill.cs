using System.ComponentModel.DataAnnotations;

namespace SkillSync.Models
{
    public class Skill
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        
    }
}
