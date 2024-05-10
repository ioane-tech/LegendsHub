type userType = {
  full_name: string;
  id: number;
  in_game_name: string;
  username: string;
};

type selectedUser = {
  label: string;
  id: number;
};

type teamMember = {
  member_id: number;
  in_game_name: string;
  role: string;
};

type teamType = {
  creator: number;
  id: number;
  logo: string | null;
  member_count: number;
  name: string;
  status: boolean;
  members: teamMember[];
};

type InvitationTypes = {
  id: number;
  sender: number;
  receiver: number;
  team: number;
  role: string;
  status: string;
};

type NotificationTypes = {
  id: number;
  user: string;
  message: string;
  created_at: string;
};
type TournamentRegistration = {
  id: number;
  created_time: string;
  tournament: number;
  team:number;
};