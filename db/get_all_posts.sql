select p.post, u.username, u.profile_picture
from posts p
join users u on p.userid = u.id
where post like '%'$1'%';