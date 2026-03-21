namespace STTB.Entities;

public interface IHaveCreateAndUpdateAudit
{
    string CreatedBy { get; set; }
    DateTime CreatedAt { get; set; }
    string? UpdatedBy { get; set; }
    DateTime? UpdatedAt { get; set; }
}
