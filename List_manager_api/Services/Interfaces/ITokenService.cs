using List_manager_api.Domain.Db;

namespace List_manager_api.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(User user);
        Task<string> GenerateRefreshToken(User user);
        Task<bool> SaveRefreshToken(int userId, string refreshToken);
        Task<bool> ValidateRefreshToken(string refreshToken);
        Task<bool> RevokeRefreshToken(string refreshToken);

    }
}
