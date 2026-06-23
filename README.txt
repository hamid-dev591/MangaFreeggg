Add to handlers/log.js

require('../logs/guildMemberUpdate')(client);
require('../logs/threadCreate')(client);
require('../logs/threadDelete')(client);
require('../logs/stickerCreate')(client);
require('../logs/stickerDelete')(client);
require('../logs/stickerUpdate')(client);
require('../logs/guildAuditLog')(client);
