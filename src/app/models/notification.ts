export enum NotificationType {
	REGULAR_NOTIFICATION = "RegularNotification",
	JOIN_NOTIFICATION = "JoinNotification"
}

export class Notification{
	Id: string;
	Message:string;
	Username:string;
	League_Key:string;
	Requesting_User:string;
	Type:NotificationType
}