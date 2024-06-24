export type TorrentState =
	| "error"
	| "missingFiles"
	| "uploading"
	| "pausedUP"
	| "queuedUP"
	| "stalledUP"
	| "checkingUP"
	| "forcedUP"
	| "allocating"
	| "downloading"
	| "metaDL"
	| "pausedDL"
	| "queuedDL"
	| "stalledDL"
	| "checkingDL"
	| "forcedDL"
	| "checkingResumeData"
	| "moving"
	| "unknown";

export type ScanDir = 0 | 1 | string;
// 0: Download to the monitored folder
// 1: Download to the default save path
// string: Download to this path

export type SchedulerDays = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
// 0: "Every day";
// 1: "Every weekday";
// 2: "Every weekend";
// 3: "Every Monday";
// 4: "Every Tuesday";
// 5: "Every Wednesday";
// 6: "Every Thursday";
// 7: "Every Friday";
// 8: "Every Saturday";
// 9: "Every Sunday";

export type Encryption = 0 | 1 | 2;
// 0	Prefer encryption
// 1	Force encryption on
// 2	Force encryption off
// NB: the first options allows you to use both encrypted and unencrypted connections
// (this is the default); other options are mutually exclusive: e.g. by forcing encryption
// on you won't be able to use unencrypted connections and vice versa.

export type ProxyType = -1 | 0 | 1 | 2 | 3 | 4 | 5;
// -1:	Proxy is disabled
//  1:	HTTP proxy without authentication
//  2:	SOCKS5 proxy without authentication
//  3:	HTTP proxy with authentication
//  4:	SOCKS5 proxy with authentication
//  5:	SOCKS4 proxy without authentication

export type DyndnsService = 0 | 1;
// 0: Use DyDNS
// 1: Use NOIP

export type MaxRatioAct = 0 | 1;
// 0: Remove torrent
// 1: Remove torrent

export type BittorrentProtocol = 0 | 1 | 2;
// 0	TCP and μTP
// 1	TCP
// 2	μTP

export type UploadChokingAlgorithm = 0 | 1 | 2;
// 0	Round-robin
// 1	Fastest upload
// 2	Anti-leech

export type UploadSlotsBehavior = 0 | 1;
// 0	Fixed slots
// 1	Upload rate based

export type UtpTcpMixedMode = 0 | 1;
// 0	Prefer TCP
// 1	Peer proportional

export type ConnectionStatus = "connected" | "disconnected" | "firewalled";

export type TorrentTrackerStatus = 0 | 1 | 2 | 3 | 4;
// 0	Tracker is disabled (used for DHT, PeX, and LSD)
// 1	Tracker has not been contacted yet
// 2	Tracker has been contacted and is working
// 3	Tracker is updating
// 4	Tracker has been contacted, but it is not working (or doesn't send proper replies)

export type TorrentFilePriority = 0 | 1 | 6 | 7;
// 0	Do not download
// 1	Normal priority
// 6	High priority
// 7	Maximal priority

export type TorrentPieceState = 0 | 1 | 2;
// 0	Not downloaded yet
// 1	Now downloading
// 2	Already downloaded
export interface IBuildInfo {
	qt: string; // Version of Qt library
	libtorrent: string; // Version of libtorrent library
	boost: string; // Version of boost library
	openssl: string; // Version of OpenSSL library
	bitness: number; // Bitness of the application
}

export interface ITransferInfo {
	dl_info_speed: number; // Global download rate (bytes/s)
	dl_info_data: number; // Data downloaded this session (bytes)
	up_info_speed: number; // Global upload rate (bytes/s)
	up_info_data: number; // Data uploaded this session (bytes)
	dl_rate_limit: number; // Download rate limit (bytes/s)
	up_rate_limit: number; // Upload rate limit (bytes/s)
	dht_nodes: number; // DHT nodes connected to
	connection_status: ConnectionStatus; // Connection status. See possible values here below
}
export interface IPreferences {
	locale: string; // Currently selected language (e.g. en_GB for English)
	create_subfolder_enabled: boolean; // True if a subfolder should be created when adding a torrent
	start_paused_enabled: boolean; // True if torrents should be added in a Paused state
	auto_delete_mode: number; // TODO: Add description
	preallocate_all: boolean; // True if disk space should be pre-allocated for all files
	incomplete_files_ext: boolean; // True if ".!qB" should be appended to incomplete files
	auto_tmm_enabled: boolean; // True if Automatic Torrent Management is enabled by default
	torrent_changed_tmm_enabled: boolean; // True if torrent should be relocated when its Category changes
	save_path_changed_tmm_enabled: boolean; // True if torrent should be relocated when the default save path changes
	category_changed_tmm_enabled: boolean; // True if torrent should be relocated when its Category's save path changes
	save_path: string; // Default save path for torrents, separated by slashes
	temp_path_enabled: boolean; // True if folder for incomplete torrents is enabled
	temp_path: string; // Path for incomplete torrents, separated by slashes
	scan_dirs: ScanDir; // Property: directory to watch for torrent files, value: where torrents loaded from this directory should be downloaded to (see list of possible values below). Slashes are used as path separators; multiple key/value pairs can be specified
	export_dir: string; // Path to directory to copy .torrent files to. Slashes are used as path separators
	export_dir_fin: string; // Path to directory to copy .torrent files of completed downloads to. Slashes are used as path separators
	mail_notification_enabled: boolean; // True if e-mail notification should be enabled
	mail_notification_sender: string; // e-mail where notifications should originate from
	mail_notification_email: string; // e-mail to send notifications to
	mail_notification_smtp: string; // smtp server for e-mail notifications
	mail_notification_ssl_enabled: boolean; // True if smtp server requires SSL connection
	mail_notification_auth_enabled: boolean; // True if smtp server requires authentication
	mail_notification_username: string; // Username for smtp authentication
	mail_notification_password: string; // Password for smtp authentication
	autorun_enabled: boolean; // True if external program should be run after torrent has finished downloading
	autorun_program: string; // Program path/name/arguments to run if autorun_enabled is enabled; path is separated by slashes; you can use %f and %n arguments, which will be expanded by qBittorent as path_to_torrent_file and torrent_name (from the GUI; not the .torrent file name) respectively
	queueing_enabled: boolean; // True if torrent queuing is enabled
	max_active_downloads: number; // Maximum number of active simultaneous downloads
	max_active_torrents: number; // Maximum number of active simultaneous downloads and uploads
	max_active_uploads: number; // Maximum number of active simultaneous uploads
	dont_count_slow_torrents: boolean; // If true torrents w/o any activity (stalled ones) will not be counted towards max_active_* limits; see dont_count_slow_torrents for more information
	slow_torrent_dl_rate_threshold: number; // Download rate in KiB/s for a torrent to be considered "slow"
	slow_torrent_ul_rate_threshold: number; // Upload rate in KiB/s for a torrent to be considered "slow"
	slow_torrent_inactive_timer: number; // Seconds a torrent should be inactive before considered "slow"
	max_ratio_enabled: boolean; // True if share ratio limit is enabled
	max_ratio: number; // Get the global share ratio limit
	max_ratio_act: MaxRatioAct; // Action performed when a torrent reaches the maximum share ratio. See list of possible values here below.
	listen_port: number; // Port for incoming connections
	upnp: boolean; // True if UPnP/NAT-PMP is enabled
	random_port: boolean; // True if the port is randomly selected
	dl_limit: number; // Global download speed limit in KiB/s; -1 means no limit is applied
	up_limit: number; // Global upload speed limit in KiB/s; -1 means no limit is applied
	max_connec: number; // Maximum global number of simultaneous connections
	max_connec_per_torrent: number; // Maximum number of simultaneous connections per torrent
	max_uploads: number; // Maximum number of upload slots
	max_uploads_per_torrent: number; // Maximum number of upload slots per torrent
	stop_tracker_timeout: number; // Timeout in seconds for a stopped announce request to trackers
	enable_piece_extent_affinity: boolean; // True if the advanced libtorrent option piece_extent_affinity is enabled
	bittorrent_protocol: BittorrentProtocol; // Bittorrent Protocol to use (see list of possible values below)
	limit_utp_rate: boolean; // True if [du]l_limit should be applied to uTP connections; this option is only available in qBittorent built against libtorrent version 0.16.X and higher
	limit_tcp_overhead: boolean; // True if [du]l_limit should be applied to estimated TCP overhead (service data: e.g. packet headers)
	limit_lan_peers: boolean; // True if [du]l_limit should be applied to peers on the LAN
	alt_dl_limit: number; // Alternative global download speed limit in KiB/s
	alt_up_limit: number; // Alternative global upload speed limit in KiB/s
	scheduler_enabled: boolean; // True if alternative limits should be applied according to schedule
	schedule_from_hour: number; // Scheduler starting hour
	schedule_from_min: number; // Scheduler starting minute
	schedule_to_hour: number; // Scheduler ending hour
	schedule_to_min: number; // Scheduler ending minute
	scheduler_days: SchedulerDays; // Scheduler days. See possible values here below
	dht: boolean; // True if DHT is enabled
	pex: boolean; // True if PeX is enabled
	lsd: boolean; // True if LSD is enabled
	encryption: Encryption; // See list of possible values here below
	anonymous_mode: boolean; // If true anonymous mode will be enabled; read more here; this option is only available in qBittorent built against libtorrent version 0.16.X and higher
	proxy_type: ProxyType; // See list of possible values here below
	proxy_ip: string; // Proxy IP address or domain name
	proxy_port: number; // Proxy port
	proxy_peer_connections: boolean; // True if peer and web seed connections should be proxified; this option will have any effect only in qBittorent built against libtorrent version 0.16.X and higher
	proxy_auth_enabled: boolean; // True proxy requires authentication; doesn't apply to SOCKS4 proxies
	proxy_username: string; // Username for proxy authentication
	proxy_password: string; // Password for proxy authentication
	proxy_torrents_only: boolean; // True if proxy is only used for torrents
	ip_filter_enabled: boolean; // True if external IP filter should be enabled
	ip_filter_path: string; // Path to IP filter file (.dat, .p2p, .p2b files are supported); path is separated by slashes
	ip_filter_trackers: boolean; // True if IP filters are applied to trackers
	web_ui_domain_list: string; // Semicolon-separated list of domains to accept when performing Host header validation
	web_ui_address: string; // IP address to use for the WebUI
	web_ui_port: number; // WebUI port
	web_ui_upnp: boolean; // True if UPnP is used for the WebUI port
	web_ui_username: string; // WebUI username
	web_ui_password: string; // For API ≥ v2.3.0: Plaintext WebUI password, not readable, write-only. For API < v2.3.0: MD5 hash of WebUI password, hash is generated from the following string: username:Web UI Access:plain_text_web_ui_password
	web_ui_csrf_protection_enabled: boolean; // True if WebUI CSRF protection is enabled
	web_ui_clickjacking_protection_enabled: boolean; // True if WebUI clickjacking protection is enabled
	web_ui_secure_cookie_enabled: boolean; // True if WebUI cookie Secure flag is enabled
	web_ui_max_auth_fail_count: number; // Maximum number of authentication failures before WebUI access ban
	web_ui_ban_duration: number; // WebUI access ban duration in seconds
	web_ui_session_timeout: number; // Seconds until WebUI is automatically signed off
	web_ui_host_header_validation_enabled: boolean; // True if WebUI host header validation is enabled
	bypass_local_auth: boolean; // True if authentication challenge for loopback address (127.0.0.1) should be disabled
	bypass_auth_subnet_whitelist_enabled: boolean; // True if webui authentication should be bypassed for clients whose ip resides within (at least) one of the subnets on the whitelist
	bypass_auth_subnet_whitelist: string; // (White)list of ipv4/ipv6 subnets for which webui authentication should be bypassed; list entries are separated by commas
	alternative_webui_enabled: boolean; // True if an alternative WebUI should be used
	alternative_webui_path: string; // File path to the alternative WebUI
	use_https: boolean; // True if WebUI HTTPS access is enabled
	ssl_key: string; // For API < v2.0.1: SSL keyfile contents (this is a not a path)
	ssl_cert: string; // For API < v2.0.1: SSL certificate contents (this is a not a path)
	web_ui_https_key_path: string; // For API ≥ v2.0.1: Path to SSL keyfile
	web_ui_https_cert_path: string; // For API ≥ v2.0.1: Path to SSL certificate
	dyndns_enabled: boolean; // True if server DNS should be updated dynamically
	dyndns_service: DyndnsService; // See list of possible values here below
	dyndns_username: string; // Username for DDNS service
	dyndns_password: string; // Password for DDNS service
	dyndns_domain: string; // Your DDNS domain name
	rss_refresh_interval: number; // RSS refresh interval
	rss_max_articles_per_feed: number; // Max stored articles per RSS feed
	rss_processing_enabled: boolean; // Enable processing of RSS feeds
	rss_auto_downloading_enabled: boolean; // Enable auto-downloading of torrents from the RSS feeds
	rss_download_repack_proper_episodes: boolean; // For API ≥ v2.5.1: Enable downloading of repack/proper Episodes
	rss_smart_episode_filters: string; // For API ≥ v2.5.1: List of RSS Smart Episode Filters
	add_trackers_enabled: boolean; // Enable automatic adding of trackers to new torrents
	add_trackers: string; // List of trackers to add to new torrent
	web_ui_use_custom_http_headers_enabled: boolean; // For API ≥ v2.5.1: Enable custom http headers
	web_ui_custom_http_headers: string; // For API ≥ v2.5.1: List of custom http headers
	max_seeding_time_enabled: boolean; // True enables max seeding time
	max_seeding_time: number; // Number of minutes to seed a torrent
	announce_ip: string; // TODO: Add description
	announce_to_all_tiers: boolean; // True always announce to all tiers
	announce_to_all_trackers: boolean; // True always announce to all trackers in a tier
	async_io_threads: number; // Number of asynchronous I/O threads
	banned_IPs: string; // List of banned IPs
	checking_memory_use: number; // Outstanding memory when checking torrents in MiB
	current_interface_address: string; // IP Address to bind to. Empty String means All addresses
	current_network_interface: string; // Network Interface used
	disk_cache: number; // Disk cache used in MiB
	disk_cache_ttl: number; // Disk cache expiry interval in seconds
	embedded_tracker_port: number; // Port used for embedded tracker
	enable_coalesce_read_write: boolean; // True enables coalesce reads & writes
	enable_embedded_tracker: boolean; // True enables embedded tracker
	enable_multi_connections_from_same_ip: boolean; // True allows multiple connections from the same IP address
	enable_os_cache: boolean; // True enables os cache
	enable_upload_suggestions: boolean; // True enables sending of upload piece suggestions
	file_pool_size: number; // File pool size
	outgoing_ports_max: number; // Maximal outgoing port (0: Disabled)
	outgoing_ports_min: number; // Minimal outgoing port (0: Disabled)
	recheck_completed_torrents: boolean; // True rechecks torrents on completion
	resolve_peer_countries: boolean; // True resolves peer countries
	save_resume_data_interval: number; // Save resume data interval in min
	send_buffer_low_watermark: number; // Send buffer low watermark in KiB
	send_buffer_watermark: number; // Send buffer watermark in KiB
	send_buffer_watermark_factor: number; // Send buffer watermark factor in percent
	socket_backlog_size: number; // Socket backlog size
	upload_choking_algorithm: UploadChokingAlgorithm; // Upload choking algorithm used (see list of possible values below)
	upload_slots_behavior: UploadSlotsBehavior; // Upload slots behavior used (see list of possible values below)
	upnp_lease_duration: number; // UPnP lease duration (0: Permanent lease)
	utp_tcp_mixed_mode: UtpTcpMixedMode; // μTP-TCP mixed mode algorithm (see list of possible values below)
}

export interface TorrentInfoParameters {
	filter?: string; // Filter torrent list by state
	category?: string; // Get torrents with the given category
	tag?: string; // Get torrents with the given tag
	sort?: string; // Sort torrents by given key
	reverse?: boolean; // Enable reverse sorting
	limit?: number; // Limit the number of torrents returned
	offset?: number; // Set offset
	hashes?: string; // Filter by hashes
}

export interface TorrentInfo {
	added_on: number; // Time (Unix Epoch) when the torrent was added to the client
	amount_left: number; // Amount of data left to download (bytes)
	auto_tmm: boolean; // Whether this torrent is managed by Automatic Torrent Management
	availability: number; // Percentage of file pieces currently available
	category: string; // Category of the torrent
	completed: number; // Amount of transfer data completed (bytes)
	completion_on: number; // Time (Unix Epoch) when the torrent completed
	content_path: string; // Absolute path of torrent content (root path for multifile torrents, absolute file path for singlefile torrents)
	dl_limit: number; // Torrent download speed limit (bytes/s). -1 if unlimited.
	dlspeed: number; // Torrent download speed (bytes/s)
	downloaded: number; // Amount of data downloaded
	downloaded_session: number; // Amount of data downloaded this session
	eta: number; // Torrent ETA (seconds)
	f_l_piece_prio: boolean; // True if first last piece are prioritized
	force_start: boolean; // True if force start is enabled for this torrent
	hash: string; // Torrent hash
	isPrivate: boolean; // True if torrent is from a private tracker (added in 5.0.0)
	last_activity: number; // Last time (Unix Epoch) when a chunk was downloaded/uploaded
	magnet_uri: string; // Magnet URI corresponding to this torrent
	max_ratio: number; // Maximum share ratio until torrent is stopped from seeding/uploading
	max_seeding_time: number; // Maximum seeding time (seconds) until torrent is stopped from seeding
	name: string; // Torrent name
	num_complete: number; // Number of seeds in the swarm
	num_incomplete: number; // Number of leechers in the swarm
	num_leechs: number; // Number of leechers connected to
	num_seeds: number; // Number of seeds connected to
	priority: number; // Torrent priority. Returns -1 if queuing is disabled or torrent is in seed mode
	progress: number; // Torrent progress (percentage/100)
	ratio: number; // Torrent share ratio. Max ratio value: 9999.
	ratio_limit: number; // TODO (what is different from max_ratio?)
	save_path: string; // Path where this torrent's data is stored
	seeding_time: number; // Torrent elapsed time while complete (seconds)
	seeding_time_limit: number; // TODO (what is different from max_seeding_time?) seeding_time_limit is a per torrent setting, when Automatic Torrent Management is disabled, furthermore then max_seeding_time is set to seeding_time_limit for this torrent. If Automatic Torrent Management is enabled, the value is -2. And if max_seeding_time is unset it have a default value -1.
	seen_complete: number; // Time (Unix Epoch) when this torrent was last seen complete
	seq_dl: boolean; // True if sequential download is enabled
	size: number; // Total size (bytes) of files selected for download
	state: TorrentState; // Torrent state. See table here below for the possible values
	super_seeding: boolean; // True if super seeding is enabled
	tags: string; // Comma-concatenated tag list of the torrent
	time_active: number; // Total active time (seconds)
	total_size: number; // Total size (bytes) of all file in this torrent (including unselected ones)
	tracker: string; // The first tracker with working status. Returns empty string if no tracker is working.
	up_limit: number; // Torrent upload speed limit (bytes/s). -1 if unlimited.
	uploaded: number; // Amount of data uploaded
	uploaded_session: number; // Amount of data uploaded this session
	upspeed: number; // Torrent upload speed (bytes/s)
}

export interface TorrentProperties {
	save_path: string; // Torrent save path
	creation_date: number; // Torrent creation date (Unix timestamp)
	piece_size: number; // Torrent piece size (bytes)
	comment: string; // Torrent comment
	total_wasted: number; // Total data wasted for torrent (bytes)
	total_uploaded: number; // Total data uploaded for torrent (bytes)
	total_uploaded_session: number; // Total data uploaded this session (bytes)
	total_downloaded: number; // Total data downloaded for torrent (bytes)
	total_downloaded_session: number; // Total data downloaded this session (bytes)
	up_limit: number; // Torrent upload limit (bytes/s)
	dl_limit: number; // Torrent download limit (bytes/s)
	time_elapsed: number; // Torrent elapsed time (seconds)
	seeding_time: number; // Torrent elapsed time while complete (seconds)
	nb_connections: number; // Torrent connection count
	nb_connections_limit: number; // Torrent connection count limit
	share_ratio: number; // Torrent share ratio
	addition_date: number; // When this torrent was added (unix timestamp)
	completion_date: number; // Torrent completion date (unix timestamp)
	created_by: string; // Torrent creator
	dl_speed_avg: number; // Torrent average download speed (bytes/second)
	dl_speed: number; // Torrent download speed (bytes/second)
	eta: number; // Torrent ETA (seconds)
	last_seen: number; // Last seen complete date (unix timestamp)
	peers: number; // Number of peers connected to
	peers_total: number; // Number of peers in the swarm
	pieces_have: number; // Number of pieces owned
	pieces_num: number; // Number of pieces of the torrent
	reannounce: number; // Number of seconds until the next announce
	seeds: number; // Number of seeds connected to
	seeds_total: number; // Number of seeds in the swarm
	total_size: number; // Torrent total size (bytes)
	up_speed_avg: number; // Torrent average upload speed (bytes/second)
	up_speed: number; // Torrent upload speed (bytes/second)
	isPrivate: boolean; // True if torrent is from a private tracker
}

export interface TorrentTrackers {
	url: string; //	Tracker url
	status: TorrentTrackerStatus; //	Tracker status. See the table below for possible values
	tier: number; //Tracker priority tier. Lower tier trackers are tried before higher tiers. Tier numbers are valid when >= 0, < 0 is used as placeholder when tier does not exist for special entries (such as DHT).
	num_peers: number; //	Number of peers for current torrent, as reported by the tracker
	num_seeds: number; //	Number of seeds for current torrent, asreported by the tracker
	num_leeches: number; //	Number of leeches for current torrent, as reported by the tracker
	num_downloaded: number; //	Number of completed downloads for current torrent, as reported by the tracker
	msg: string; //	Tracker message (there is no way of knowing what this message is - it's up to tracker admins)
}

export interface TorrentUrl {
	url: string; // URL
}

export interface TorrentFile {
	index: number; // File index
	name: string; // File name (including relative path)
	size: number; // File size (bytes)
	progress: number; // File progress (percentage/100)
	priority: TorrentFilePriority; // File priority. See possible values here below
	is_seed: boolean; // True if file is seeding/complete
	piece_range: [number, number]; // The first number is the starting piece index and the second number is the ending piece index (inclusive)
	availability: number; // Percentage of file pieces currently available (percentage/100)
}

export interface AddTorrentParameters {
	urls?: string; //	URLs separated with newlines
	torrents: FileList; //Raw data of torrent file. torrents can be presented multiple times.
	savepath?: string; //	Download folder
	cookie?: string; //Cookie sent to download the .torrent file
	category?: string; //	Category for the torrent
	tags?: string; //	Tags for the torrent, split by ','
	skip_checking?: string; //Skip hash checking. Possible values are true, false (default)
	paused?: string; //	Add torrents in the paused state. Possible values are true, false (default)
	root_folder?: string; //	Create the root folder. Possible values are true, false, unset (default)
	rename?: string; //	Rename torrent
	upLimit?: number; //	Set torrent upload speed limit. Unit in bytes/second
	dlLimit?: number; //Set torrent download speed limit. Unit in bytes/second
	ratioLimit?: number; //	Set torrent share ratio limit
	seedingTimeLimit?: number; //Set torrent seeding time limit. Unit in minutes
	autoTMM?: boolean; //Whether Automatic Torrent Management should be used
	sequentialDownload?: string; //Enable sequential download. Possible values are true, false (default)
	firstLastPiecePrio?: string; //Prioritize download first last piece. Possible values are true, false (default)
}
